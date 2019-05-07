import { StateDeclaration } from '@uirouter/core';
declare module '@uirouter/core/lib/state/interface' {
    interface StateDeclaration {
        ncyBreadcrumb?: {
            label?: string;
            /**
             * Override the parent state (only for the breadcrumb)
             **/
            parent?: string | Function;
            /**
             * When defined to true, the state is never included in the chain of states and never appears in the breadcrumb
             **/
            skip?: boolean;
        };
        ncyBreadcrumbLabel?: string;
        ncyBreadcrumbLink?: string;
    }
}
declare module '@uirouter/core/lib/state/stateObject' {
    interface StateObject {
        ncyBreadcrumb?: {
            /**
             * Contains the label for the step in the breadcrumb. The state name is used if not defined.
             **/
            label?: string;
            /**
             * Override the parent state (only for the breadcrumb)
             **/
            parent?: string | Function;
            /**
             * When defined to true, the state is never included in the chain of states and never appears in the breadcrumb
             **/
            skip?: boolean;
        };
        ncyBreadcrumbLabel?: string;
        ncyBreadcrumbLink?: string;
    }
}
/**
* Provider that returns an instance of $breadcrumb service. It contains the global configuration of the module.
**/
export interface $breadcrumbProvider {
    /**
    * Setter for options defined in a module.config block
    **/
    setOptions(options: breadcrumbProviderOptions): void;
}
/**
* Global configuration options for angular-breadcrumb
**/
export interface breadcrumbProviderOptions {
    /**
    * An existing state's name to be the state is the first step of the breadcrumb
    **/
    prefixStateName?: string;
    /**
    * Contains a predefined template's name; 'bootstrap3' (default), 'bootstrap2' or HTML for a custom template. This property is ignored if templateUrl is defined.
    **/
    template?: string;
    /**
    * Contains the path to a template file. This property takes precedence over the template property.
    **/
    templateUrl?: string;
    /**
    * If true, abstract states are included in the breadcrumb. This option has a lower priority than the state-specific option skip
    **/
    includeAbstract?: boolean;
}
/**
* Service responsible for access to $state and for directive configuration.
**/
export interface $breadcrumbService {
    /**
    * Returns the state chain to the current state (i.e. all the steps of the breadcrumb). It's an array of state object enriched with the module-specific property ncyBreadcrumbLink (the href for the breadcrumb step).
    **/
    getStatesChain(): StateDeclaration[];
    /**
    * Return the last step of the breadcrumb, generally the one relative to the current state, expect if it is configured as skipped (the method returns its parent). As getStatesChain, the state object is enriched with ncyBreadcrumbLink.
    **/
    getLastStep(): StateDeclaration;
}
