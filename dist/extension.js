"use strict";
// import * as vscode from 'vscode';
// import axios from 'axios';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
// export function activate(context: vscode.ExtensionContext) {
//     // Create a new command for sending a message to ChatGPT
//     let disposable = vscode.commands.registerCommand('chatGPT.sendMessage', async () => {
//         // Get the user's input message
//         const userInput = await vscode.window.showInputBox({
//             prompt: 'Type your message to ChatGPT'
//         });
//         if (!userInput) return;
//         try {
//             // Call the OpenAI API to get a response from ChatGPT
//             const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//                 prompt: userInput,
//                 max_tokens: 60,
//                 n: 1,
//                 stop: '\n'
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
//                 }
//             });
//             // Show the response from ChatGPT in a new message
//             vscode.window.showInformationMessage(response.data.choices[0].text);
//         } catch (error) {
//             // Show an error message if something went wrong
//             vscode.window.showErrorMessage('An error occurred: ' + error.message);
//         }
//     });
//     // Add the command to the extension's context
//     context.subscriptions.push(disposable);
// }
// export function deactivate() {}
// import * as vscode from 'vscode';
// import { getChatGPTResponse } from './utils/chatgpt';
// export function activate(context: vscode.ExtensionContext) {
//   let disposable = vscode.commands.registerCommand('extension.generateCode', async () => {
//     const message = await vscode.window.showInputBox({ prompt: 'Enter a message to generate code' });
//     if (message) {
//       const code = await getChatGPTResponse(message);
//       if (code) {
//         const editor = vscode.window.activeTextEditor;
//         if (editor) {
//           editor.edit(editBuilder => {
//             editBuilder.insert(editor.selection.active, code);
//           });
//         }
//       } else {
//         vscode.window.showErrorMessage('Failed to generate code');
//       }
//     }
//   });
//   context.subscriptions.push(disposable);
// }
// export function deactivate() {}
var vscode = __importStar(require("vscode"));
var chatgpt_1 = require("./utils/chatgpt");
function activate(context) {
    var _this = this;
    var disposable = vscode.commands.registerCommand('extension.generateCode', function () { return __awaiter(_this, void 0, void 0, function () {
        var input, generatedCode, activeEditor, edit, currentPosition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Enter a message to generate code:',
                        placeHolder: 'e.g. Generate code for a React component'
                    })];
                case 1:
                    input = _a.sent();
                    if (!input) {
                        // User cancelled the input prompt
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, chatgpt_1.generateCode)(input)];
                case 2:
                    generatedCode = _a.sent();
                    if (!generatedCode) {
                        // ChatGPT failed to generate code
                        vscode.window.showErrorMessage('Failed to generate code.');
                        return [2 /*return*/];
                    }
                    activeEditor = vscode.window.activeTextEditor;
                    if (!activeEditor) {
                        vscode.window.showErrorMessage('No active text editor.');
                        return [2 /*return*/];
                    }
                    edit = new vscode.WorkspaceEdit();
                    currentPosition = activeEditor.selection.active;
                    edit.insert(activeEditor.document.uri, currentPosition, generatedCode);
                    return [4 /*yield*/, vscode.workspace.applyEdit(edit)];
                case 3:
                    _a.sent();
                    vscode.window.showInformationMessage('Generated code inserted into the codebase!');
                    return [2 /*return*/];
            }
        });
    }); });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
