export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-gradient">
            Financebrocrack
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xl)' }}>
            Master Your Finance Interviews
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="surface p-6 space-y-3 hover:surface-elevated transition-all">
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              💼
            </div>
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)' }}>
              Corporate Finance
            </h3>
            <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
              Technical & behavioral questions
            </p>
          </div>

          <div className="surface p-6 space-y-3 hover:surface-elevated transition-all">
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              📈
            </div>
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)' }}>
              Investment Banking
            </h3>
            <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
              IB-specific interview prep
            </p>
          </div>

          <div className="surface p-6 space-y-3 hover:surface-elevated transition-all">
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              📊
            </div>
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)' }}>
              Accounting
            </h3>
            <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
              Core accounting principles
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-12">
          <div className="inline-block surface px-6 py-3" style={{
            background: 'var(--color-surface-elevated)',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <span style={{
              color: 'var(--color-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              ✓ Design System Active
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
