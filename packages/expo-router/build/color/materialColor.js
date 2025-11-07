"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material3DynamicColor = Material3DynamicColor;
exports.Material3Color = Material3Color;
const expo_modules_core_1 = require("expo-modules-core");
const react_native_1 = require("react-native");
let AndroidExpoRouterModule = null;
function NativeDynamicColor(name, scheme) {
    if (process.env.EXPO_OS === 'android') {
        if (!AndroidExpoRouterModule) {
            AndroidExpoRouterModule = (0, expo_modules_core_1.requireNativeModule)('ExpoRouter');
        }
        return AndroidExpoRouterModule.Material3DynamicColor(name, scheme);
    }
    return null;
}
function NativeMaterialColor(name, scheme) {
    if (process.env.EXPO_OS === 'android') {
        if (!AndroidExpoRouterModule) {
            AndroidExpoRouterModule = (0, expo_modules_core_1.requireNativeModule)('ExpoRouter');
        }
        return AndroidExpoRouterModule.Material3Color(name, scheme);
    }
    return null;
}
function Material3DynamicColor(name) {
    const scheme = react_native_1.Appearance.getColorScheme();
    return NativeDynamicColor(name, scheme ?? 'unspecified');
}
function Material3Color(name) {
    const scheme = react_native_1.Appearance.getColorScheme();
    return NativeMaterialColor(name, scheme ?? 'unspecified');
}
//# sourceMappingURL=materialColor.js.map