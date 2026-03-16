import { ComponentPropsWithoutRef } from 'react';

type Props = {
  errors: string[] | undefined;
  showAll?: boolean;
} & ComponentPropsWithoutRef<'span'>;

export function ValidationMessage({ errors, showAll }: Props) {
  return (
    <>
      {errors ? (
        showAll ? (
          errors.map((error) => <small key={error}>{error}</small>)
        ) : (
          <small>{errors[0]}</small>
        )
      ) : null}
    </>
  );
}
