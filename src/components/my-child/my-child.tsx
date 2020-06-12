import { Component, h, Prop } from "@stencil/core";

let childId = 1;

@Component({
  tag: "my-child",
})
export class MyChild {
  public id = childId++;

  @Prop() name: string;

  constructor() {
    // console.log("constructor()", this.id);
  }

  connectedCallback() {
    console.log("connectedCallback()", this.id);
  }

  componentDidUnload() {
    // console.log("componentDidUnload()", this.id);
  }

  disconnectedCallback() {
    console.log("disconnectedCallback()", this.id);
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()", this.id);
  }

  render() {
    console.log("render()", this.id, this.name);

    return (
      <div>
        This is child {this.id} {this.name}
      </div>
    );
  }
}
