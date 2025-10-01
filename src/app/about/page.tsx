export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="space-y-6">
        <p className="text-lg">
          Welcome to my about page! This is where I&apos;ll share more about my background, 
          experience, and what drives me in my work.
        </p>
        <p>
          More content coming soon...
        </p>
      </div>
      
      {/* Test Boxes for Colors */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <strong>Background</strong><br />
          var(--background)
        </div>
        
        <div style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <strong>Foreground</strong><br />
          var(--foreground)
        </div>
        
        <div style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <strong>Muted</strong><br />
          var(--muted)
        </div>
        
        <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <strong>Primary</strong><br />
          var(--primary)
        </div>
        
        <div style={{ backgroundColor: 'var(--secondary)', color: 'var(--foreground)', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <strong>Secondary</strong><br />
          var(--secondary)
        </div>
        
        <div style={{ backgroundColor: 'var(--accent)', color: 'white', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <strong>Accent</strong><br />
          var(--accent)
        </div>
      </div>
    </div>
  );
}
