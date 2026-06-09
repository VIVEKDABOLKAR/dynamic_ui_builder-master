import { convertButton } from "../dynamicPageRender/converters/rules/button.converter";
import { convertCard } from "../dynamicPageRender/converters/rules/card.converter";
import { convertCheckbox } from "../dynamicPageRender/converters/rules/checkbox.converter";
import { convertDatePicker } from "../dynamicPageRender/converters/rules/datepicker.converter";
import { convertHeading } from "../dynamicPageRender/converters/rules/heading.converter";
import { convertInput } from "../dynamicPageRender/converters/rules/input.converter";
import { convertLayout } from "../dynamicPageRender/converters/rules/layout.converter";
import { convertRadio } from "../dynamicPageRender/converters/rules/radio.converter";
import { convertSelect } from "../dynamicPageRender/converters/rules/select.converter";
import { convertTable } from "../dynamicPageRender/converters/rules/table.converter";
import { convertTextarea } from "../dynamicPageRender/converters/rules/textarea.converter";
import { registerComponent } from "./componentRegistry";


export function registerBuiltins() {
  registerComponent("input", convertInput);
  registerComponent("button", convertButton);
  registerComponent("heading", convertHeading);
  registerComponent("layout", convertLayout);
  registerComponent("card", convertCard);
  registerComponent("textarea", convertTextarea);
  registerComponent("select", convertSelect);
  registerComponent("checkbox", convertCheckbox);
  registerComponent("radio", convertRadio);
  registerComponent("table", convertTable);
  registerComponent("datepicker", convertDatePicker);
}