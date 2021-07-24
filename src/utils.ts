/**
 *
 * @param msg
 * @param code
 */
export const errLog: (msg: string[], code: -1 | 1) => { msg: string; code: -1 | 1 } = (
  msg,
  code,
) => {
  let msgString = `${msg.length > 0 ? msg[0] : ''}`;

  for (let i = 1; i < msg.length; i += 1) {
    msgString = `${msgString}; ${msg[i]}`;
  }

  return { msg: msgString, code };
};

export const a = 1;
