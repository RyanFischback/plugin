// import * as vscode from 'vscode';
// import axios from 'axios';

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
import * as vscode from 'vscode';
import { generateCode } from './utils/chatgpt';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.generateCode', async () => {
    // Prompt the user for input
    const input = await vscode.window.showInputBox({
      prompt: 'Enter a message to generate code:',
      placeHolder: 'e.g. Generate code for a React component'
    });

    if (!input) {
      // User cancelled the input prompt
      return;
    }

    // Generate code using ChatGPT
    const generatedCode = await generateCode(input);

    if (!generatedCode) {
      // ChatGPT failed to generate code
      vscode.window.showErrorMessage('Failed to generate code.');
      return;
    }

    // Save the generated code into the codebase
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
      vscode.window.showErrorMessage('No active text editor.');
      return;
    }

    const edit = new vscode.WorkspaceEdit();
    const currentPosition = activeEditor.selection.active;
    edit.insert(activeEditor.document.uri, currentPosition, generatedCode);
    await vscode.workspace.applyEdit(edit);

    vscode.window.showInformationMessage('Generated code inserted into the codebase!');
  });

  context.subscriptions.push(disposable);
}

