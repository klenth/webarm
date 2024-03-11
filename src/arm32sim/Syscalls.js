import { SimulatorError } from './Simulator.js';
import * as format from '../format.js';

const SYSCALL_FUNCTION_REGISTER = 7;

const SYSCALL_MAP = {
    0xCA11_0001: exit,
    0xCA11_0010: getch,
    0xCA11_0011: putch,
    0xCA11_0012: flush,
    0xCA11_0100: time,
};

export function executeSyscall(state, worker) {
    const func = SYSCALL_MAP[state.registers.get(SYSCALL_FUNCTION_REGISTER)] || syscall_error;
    func(state, worker);
}

function exit(state, worker) {
    state.stop();
}

function getch(state, worker) {
    throw new SimulatorError('getchar() not yet implemented', state);
}

function putch(state, worker) {
    const byte = state.registers.get(0) & 0xff;
    state.stdout.write(byte);
}

function flush(state, worker) {
    state.stdout.flush();
}

function time(state, worker) {
    const now = new Date();
    // R0: HH_MMSS
    // R1: YYYY_MMDD

    const seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours(),
        date = now.getDate(),
        month = now.getMonth() + 1,     // months are numbered from 0 in JavaScript
        year = now.getFullYear();

    const hms = (hours << 16) | (minutes << 8) | seconds;
    const ymd = (year << 16) | (month << 8) | date;

    state.registers.set(0, hms);
    state.registers.set(1, ymd);
}

function syscall_error(state, worker, message) {
    message ||= `Invalid syscall 0x${format.hexWord(state.registers.get(SYSCALL_FUNCTION_REGISTER))}`;
    throw new SimulatorError(message, state);
}
