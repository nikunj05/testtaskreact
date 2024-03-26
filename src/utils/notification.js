import toast from 'react-hot-toast'

type MessageType = 'none' | 'error' | 'success'

interface IProps {
  title?: string;
  type?: MessageType;
  duration?: number;
}

export const showNotification = ({
  title = null,
  type: _type = 'success',
  duration = 2.5 * 1000,
  ...rest
}: IProps) => {
  const type = _type === 'error' ? 'error' : _type
  if (type === 'none') return toast(title, {duration})
  toast[type](title, {duration})
}
