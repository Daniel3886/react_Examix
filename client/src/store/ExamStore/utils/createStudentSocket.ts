import { io } from 'socket.io-client';
import { SocketOptions } from '../../../types/utils/SocketOptions';
import { StudentAuth } from '../types/auth';

export type Credentials = Omit<StudentAuth, 'role'>;

function createStudentSocket(credentials: Credentials, socketOptions?: SocketOptions) {
  const socket = io(`${import.meta.env.VITE_SERVER_WS_URL}/join-exam`, {
    auth: { role: 'student', ...credentials } as StudentAuth,
    autoConnect: false,
    ...socketOptions,
  });

  return socket;
}

export default createStudentSocket;
