import { HttpStatus } from '@nestjs/common';

export function SanitizeError(meta: { targetName: string }) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const method = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      try {
        return await method.bind(this)(...args);
      } catch (error: any) {
        console.log(error);
        return (
          inferDatabaseError(error, { targetName: meta.targetName }) ??
          inferNetworkError(error, {}) ??
          inferSystemError(error, {})
        );
      }
    };
  };
}

export type ErrorInferFunction<T extends Record<string, unknown>> = (
  error: any,
  meta: T,
) => [message: string, statusCode: number] | undefined;

const inferDatabaseError: ErrorInferFunction<{ targetName: string }> = (
  error,
  meta,
) => {
  if (error.code === 'P2025') {
    return [`${meta.targetName} does not exist`, HttpStatus.NOT_FOUND];
  }
  return undefined;
};

const inferNetworkError: ErrorInferFunction<{ connectURL?: string }> = (
  error,
  meta,
) => {
  return undefined;
};

const inferSystemError: ErrorInferFunction<{}> = (error) => {
  console.warn('unexpected error:');
  console.error(error);

  return ['internal server error', HttpStatus.INTERNAL_SERVER_ERROR];
};
