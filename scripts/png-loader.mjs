/**
 * ESM loader that intercepts .png / .jpg / .svg asset imports.
 * Returns the bare filename as the default export so that image
 * references in questionBank.ts resolve to a clean string like
 * "sakerhet-olycka-forklaring.png" instead of crashing.
 */
export function resolve(specifier, context, nextResolve) {
  if (/\.(png|jpe?g|svg|webp|gif)$/i.test(specifier)) {
    const filename = specifier.split("/").pop();
    return {
      shortCircuit: true,
      url: `data:text/javascript,export default ${JSON.stringify(filename)}`,
    };
  }
  return nextResolve(specifier, context);
}
