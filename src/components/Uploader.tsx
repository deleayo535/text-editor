import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import * as React from "react";

export default class Uploader extends React.Component<{}, {}> {
  public path: object = {
    chunkSize: 102400,
    removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
    retryAfterDelay: 3000,
    retryCount: 5,
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
  };
  public render(): JSX.Element {
    return <UploaderComponent asyncSettings={this.path} />;
  }
}
