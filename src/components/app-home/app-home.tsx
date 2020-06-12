import { Component, h, forceUpdate, getElement } from "@stencil/core";

// List of values to be rendered
const children = ["a", "b", "c"];

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <h3>Children</h3>
        {children.map((child) => (
          <my-child name={child} />
        ))}
        <br />
        <button
          onClick={() => {
            // Remove the last child
            children.pop();

            // Update the parent
            forceUpdate(this);

            // Update the last child
            const el = getElement(this);
            const childNodes = el.querySelectorAll("my-child");
            forceUpdate(childNodes[childNodes.length - 1]);
          }}
        >
          Remove last child
        </button>
      </div>
    );
  }
}
