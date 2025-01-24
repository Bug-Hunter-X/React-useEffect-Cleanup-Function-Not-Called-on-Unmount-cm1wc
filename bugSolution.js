```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Component mounted');
    const interval = setInterval(() => {
      console.log('Interval running');
    }, 1000);
    return () => {
      // Cleanup function: this code runs when the component unmounts or when the component re-renders
      clearInterval(interval);
      console.log('Component unmounting');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```