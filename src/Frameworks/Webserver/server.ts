import { Server } from 'http';
import config from '../../Utils/config';
const serverConfig = (server: Server) => {
  return {
    startServer: () => {
      const PORT = config.PORT;
      server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
      });
    }
  };
};

export default serverConfig;
