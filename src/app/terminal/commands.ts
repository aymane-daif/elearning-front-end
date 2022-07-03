export const supportedCommands: string[] = [
  'help',
  'signin',
  'signup',
  'home',
  'stack',
  'clear',
  'date',
  'whoami',
  'github',
  'email',
  'linkedin',
];

export const commands = [
  {
    key: 'help',
    value:
      'Supported commands:\n\t help, signin, signup, home, stack, clear, date, whoami, github, email, linkedin',
  },
  {
    key: 'signin',
    value: 'Sign in to your account',
  },
  {
    key: 'signup',
    value: 'Sign up for a new account',
  },
  {
    key: 'home',
    value: 'Go to the home page',
  },
  {
    key: 'stack',
    value: 'Stack used is: Angular and Spring boot',
  },
  {
    key: 'clear',
    value: 'Clear the terminal',
  },
  {
    key: 'date',
    value: `The current date is: `,
  },
  {
    key: 'whoami',
    value: 'NullPointerException Academy',
  },
  {
    key: 'github',
    value: 'Go to my github profile: https://github.com/aymane-daif/',
  },
  {
    key: 'email',
    value: 'Here is my email: aymaned345@gmail.com',
  },
  {
    key: 'linkedin',
    value:
      'Go to my linkedin profile: https://www.linkedin.com/in/aymane-daif-998b90184/',
  },
  {
    key: 'not-supported',
    value:
      ' is not supported as an internal or external command, type "help" to see all supported commands',
  },
];
