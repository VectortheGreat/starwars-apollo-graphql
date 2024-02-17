export const generateCollapseFields = (collapseFields: any) =>
  collapseFields
    .map((collapseField: any) => {
      const parentKey = collapseField.parentKey;
      const childKey = collapseField.childKey;
      if (childKey) {
        return `
          ${parentKey} {
            ${childKey} {
              ${collapseField.fields.map((field: any) => field.key).join("\n")}
            }
          }
        `;
      } else {
        return `
          ${parentKey} {
            ${collapseField.fields.map((field: any) => field.key).join("\n")}
          }
        `;
      }
    })
    .join("\n");
