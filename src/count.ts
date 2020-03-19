import { CountFunctionName } from "./declarations";

export let count_intersections: number = 0;
export let count_testRay: number = 0;
export let count_traceRay: number = 0;
export let count_shade: number = 0;
export let count_getReflectionColor: number = 0;
export let count_getNaturalColor: number = 0;
export let count_recenterX: number = 0;
export let count_recenterY: number = 0;
export let count_getPoint: number = 0;
export let count_render: number = 0;
export let count_TOTAL: number = 0;

export function count(functionName: CountFunctionName): void {
  count_TOTAL++;
  switch (functionName) {
    case `_intersections`:
      count_intersections += 1;
      break;
    case `_testRay`:
      count_testRay += 1;
      break;
    case `_traceRay`:
      count_traceRay += 1;
      break;
    case `_shade`:
      count_shade += 1;
      break;
    case `_getReflectionColor`:
      count_getReflectionColor += 1;
      break;
    case `_getNaturalColor`:
      count_getNaturalColor += 1;
      break;
    case `_recenterX`:
      count_recenterX += 1;
      break;
    case `_recenterY`:
      count_recenterY += 1;
      break;
    case `_getPoint`:
      count_getPoint += 1;
      break;
    case `render`:
      count_render += 1;
      break;
    default:
      return exhaustivelyTypeCheck(functionName);
  }
}

/** The mere existence of this function induces exhaustive type checking for the `count` function above. */
function exhaustivelyTypeCheck(x: never): never {
  throw new TypeError(`Unexpected object: ${x}`);
}
