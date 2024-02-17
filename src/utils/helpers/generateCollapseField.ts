export const generateCollapseFields = (collapseFields: any) =>
  collapseFields
    .map((collapseField: any) => {
      const parentKey = collapseField.parentKey;
      const childKey = collapseField.childKey;
      return `
        ${parentKey} {
          ${childKey} {
            ${collapseField.fields.map((field: any) => field.key).join("\n")}
          }
        }
      `;
    })
    .join("\n");
