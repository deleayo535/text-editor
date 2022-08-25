import React from "react";
import "./App.css";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  Link,
  Image,
  Table,
  Inject,
  Toolbar,
  HtmlEditor,
  QuickToolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";

// import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
// import Uploader from "./components/Uploader";
// import FileBrowser from "./components/FileBrowser";

class App extends React.Component {
  public customToolbarSettings: object = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "Strikethrough",
      "FontName",
      "FontColor",
      "FontSize",
      // "Emoji",
      "Print",
      "Undo",
      "Redo",
      // "Lists",
      "LowerCase",
      "UpperCase",
      "BackgroundColor",
      "Maximize",
      "Indent",
      "Outdent",
      "Alignments",
      "Formats",
      "createTable",
      "CreateLink",
      "Image",
      "FullScreen",
      "Styles",
    ],
  };

  public path: object = {
    chunkSize: 102400,
    removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
    retryAfterDelay: 3000,
    retryCount: 5,
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
  };

  textObject!: RichTextEditorComponent;
  public textValue!: string;
  getFormattedContent() {
    this.textValue = this.textObject.getHtml();
  }

  render() {
    return (
      <>
        <div
          style={{
            width: "800px",
            // marginLeft: "20px",
            marginLeft: "15%",
            /* margin-right: 20%; */
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <ButtonComponent onClick={this.getFormattedContent.bind(this)}>
              Send
            </ButtonComponent>
          </div>
          {/* <FileBrowser /> */}
          <UploaderComponent asyncSettings={this.path} />

          <RichTextEditorComponent
            height={250}
            placeholder={"Type Something"}
            ref={(richtexteditor: RichTextEditorComponent) => {
              this.textObject = richtexteditor;
            }}
            toolbarSettings={this.customToolbarSettings}
          >
            <Inject
              services={[
                Toolbar,
                Link,
                Image,
                HtmlEditor,
                Table,
                Image,
                QuickToolbar,
              ]}
            ></Inject>
          </RichTextEditorComponent>
          {/* <Uploader /> */}
        </div>
      </>
    );
  }
}

export default App;
