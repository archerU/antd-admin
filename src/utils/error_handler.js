import { message } from 'antd';

export default async function errorHandler(data) {
  if (data && data.data && data.data.success) {
    message.success('操作成功');
  } else {
    message.error(`操作失败::${data.data.msg}`);
  }
}
