const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const ProfileService = {
  async checkHealth() {
    try {
      const response = await fetch(`${apiBaseUrl}/actuator/health`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  }
}; 