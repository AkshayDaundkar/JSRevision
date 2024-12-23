import React from 'react';
import Editor from '@monaco-editor/react';

function CodeExample({ title, description, code }) {
  const [editorCode, setEditorCode] = React.useState(code);
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState(null);
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [editorHeight, setEditorHeight] = React.useState('300px');
  const [showDocs, setShowDocs] = React.useState(false);

  React.useEffect(() => {
    setEditorCode(code);
    setOutput('');
    setError(null);
  }, [code]);

  React.useEffect(() => {
    const updateEditorHeight = () => {
      if (window.innerWidth <= 480) {
        setEditorHeight('200px');
      } else if (window.innerWidth <= 768) {
        setEditorHeight('250px');
      } else {
        setEditorHeight('300px');
      }
    };

    updateEditorHeight();
    window.addEventListener('resize', updateEditorHeight);
    return () => window.removeEventListener('resize', updateEditorHeight);
  }, []);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }

  const handleRunCode = () => {
    try {
      const consoleOutput = [];
      const mockConsole = {
        log: (...args) => {
          consoleOutput.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : arg
          ).join(' ') + '\n');
        }
      };

      const originalConsole = window.console;
      window.console = mockConsole;

      // Execute the code
      new Function(editorCode)();
      
      // Restore original console
      window.console = originalConsole;

      setOutput(consoleOutput.join(''));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="code-example">
      <div className="example-header">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <button 
          className="docs-toggle" 
          onClick={() => setShowDocs(!showDocs)}
        >
          {showDocs ? '📝 Hide Documentation' : '📖 Show Documentation'}
        </button>
      </div>
      
      {showDocs && (
        <div className="documentation-panel">
          <div className="documentation-content">
            <h3>Example Code:</h3>
            <pre>
              <code>{code}</code>
            </pre>
            <div className="copy-button-wrapper">
              <button 
                className="copy-button"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  const btn = document.querySelector('.copy-button');
                  btn.textContent = 'Copied!';
                  setTimeout(() => btn.textContent = 'Copy Code', 2000);
                }}
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="editor-container">
        <div className="editor-wrapper">
          <h3>Try it yourself:</h3>
          <Editor
            height={editorHeight}
            defaultLanguage="javascript"
            theme="vs-dark"
            value={editorCode}
            onChange={value => setEditorCode(value)}
            onMount={handleEditorDidMount}
            loading={<div>Loading editor...</div>}
            options={{
              minimap: { enabled: false },
              fontSize: window.innerWidth <= 480 ? 12 : 14,
              padding: { top: 10 },
              wordWrap: 'on'
            }}
          />
          <button 
            className="run-button" 
            onClick={handleRunCode}
            disabled={!isEditorReady}
          >
            Run Code
          </button>
        </div>
        
        <div className="output-panel">
          <h3>Output:</h3>
          <div className="output-content">
            {error ? (
              <div className="error">{error}</div>
            ) : (
              <div className="result">{output}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeExample;
