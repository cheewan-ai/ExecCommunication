/**
 * Tiny class-name joiner. Same idea as `clsx`, kept inline so we don't
 * pull a dependency for one helper.
 */
export function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}
