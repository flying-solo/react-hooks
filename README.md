# Demonstration of useCallback Hook

## useCallback hook returns a memoized callback function.
## Memoization can be thought as caching a value as you don't have to recalculate it.
###This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

