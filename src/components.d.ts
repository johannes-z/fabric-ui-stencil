/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface FabricToggle {
    'checked': boolean;
    'disabled'?: boolean;
  }
  interface FabricToggleAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'disabled'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'FabricToggle': Components.FabricToggle;
  }

  interface StencilIntrinsicElements {
    'fabric-toggle': Components.FabricToggleAttributes;
  }


  interface HTMLFabricToggleElement extends Components.FabricToggle, HTMLStencilElement {}
  var HTMLFabricToggleElement: {
    prototype: HTMLFabricToggleElement;
    new (): HTMLFabricToggleElement;
  };

  interface HTMLElementTagNameMap {
    'fabric-toggle': HTMLFabricToggleElement
  }

  interface ElementTagNameMap {
    'fabric-toggle': HTMLFabricToggleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}