/**
 * Renders a JSON-LD <script> tag for structured data.
 * Use for Restaurant schema, breadcrumbs, etc.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
