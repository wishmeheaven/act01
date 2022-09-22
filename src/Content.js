const Content = () => {

    const handleNameContent = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    
  return (
    <main>
        <p>
            Hello {handleNameContent()}!
        </p>
    </main>
    
  )
}

export default Content