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
// import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import Uploader from "./components/Uploader";

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
            width: "700px",
            // marginLeft: "20px",
            marginLeft: "20%",
            /* margin-right: 20%; */
            marginTop: "50px",
          }}
        >
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <ButtonComponent onClick={this.getFormattedContent.bind(this)}>
              Send
            </ButtonComponent>
          </div>
          <RichTextEditorComponent
            ref={(richtexteditor: RichTextEditorComponent) => {
              this.textObject = richtexteditor;
            }}
            toolbarSettings={this.customToolbarSettings}
          >
            <p>
              The Toolbar contains commands to align the text, insert a link,
              insert an image, insert list, undo/redo operations, HTML view,
              etc...
            </p>
            <p>
              The Toolbar is fully <b>customizable.</b>
            </p>

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
          <Uploader />
        </div>
      </>
    );
  }
}

export default App;
