export function downloadFile(data: any, name: string): void {
  const blob: Blob = new Blob([data], {type: "text/csv"});
  const fileName: string = name + ".csv";
  const objectUrl: string = URL.createObjectURL(blob);
  const a: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;

  a.href = objectUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(objectUrl);
}
