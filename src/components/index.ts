/**
 * Components Barrel File
 * -------------------------------------
 * This file serves as a single entry point
 * for all components in this folder.
 *
 * Why?
 * - Cleaner imports
 * - Easier refactoring
 * - Centralized exports
 *
 * Example:
 *   import { Button, Card, Modal } from "@/components";
 *
 * Add new components below
 */

/* Global Component */
export { default as Logo } from "./global/Logo";
export { default as NavMenu } from "./global/NavMenu";
export { default as Header } from "./global/Header";
export { default as Footer } from "./global/Footer";
export { default as Logout } from "./global/Logout";
export { default as ModeToggle } from "./global/ModeToggle";
export { default as Joyride } from "./global/Joyride";
export { default as JoyrideController } from "./global/JoyrideController";

/* Dashboard Component */
export * from "./dashboard";
