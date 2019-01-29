import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../Input/Input";

storiesOf("Input", module)
  .add("Input", () => (
    <Input/>
  ))
  .add("Set to disabled", () => (
    <Input disabled/>
  ))
  .add("Set to error", () => (
    <Input error/>
  ));