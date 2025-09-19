// A single key for the whole journey
const SESSION_KEY = 'participantSession';

  // Read the current session from localStorage
  function getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
  }

  // Save the session back to localStorage
  function saveSession(obj) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(obj));
  }

  // Generate a unique id (fallback if randomUUID missing)
  function makeId() {
    if (crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1e9);
  }

  // Start a fresh session when user registers
  function startSession({ name, email, age }) {
    const session = {
      id: makeId(),
      name: name.trim(),
      email: email.trim(),
      age: String(age).trim(),
      startedAt: new Date().toISOString()
    };
    saveSession(session);
    return session;
  }
}
