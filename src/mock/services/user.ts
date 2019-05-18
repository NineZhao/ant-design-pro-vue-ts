import Mock from "mockjs2";
import { builder } from "../util";

const info = (options: any) => {
  const userInfo = {
    id: "4291d7da9005377ec9aec4a71ea837f",
    name: "天野远子",
    username: "admin",
    password: "",
    avatar: "/avatar2.jpg",
    status: 1,
    telephone: "",
    lastLoginIp: "27.154.74.117",
    lastLoginTime: 1534837621348,
    creatorId: "admin",
    createTime: 1497160610259,
    merchantCode: "TLif2btpzg079h15bk",
    deleted: 0,
    roleId: "admin",
    role: {}
  };
  // role
  const roleObj = {
    id: "admin",
    name: "管理员",
    describe: "拥有所有权限",
    status: 1,
    creatorId: "system",
    createTime: 1497160610259,
    deleted: 0,
    permissions: [
      {
        roleId: "admin",
        permissionId: "dashboard",
        permissionName: "仪表盘",
        actions:
          // tslint:disable-next-line: max-line-length
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        actionEntitySet: [
          {
            action: "add",
            describe: "新增",
            defaultCheck: false
          },
          {
            action: "query",
            describe: "查询",
            defaultCheck: false
          },
          {
            action: "get",
            describe: "详情",
            defaultCheck: false
          },
          {
            action: "update",
            describe: "修改",
            defaultCheck: false
          },
          {
            action: "delete",
            describe: "删除",
            defaultCheck: false
          }
        ],
        actionList: null,
        dataAccess: null
      }
    ]
  };

  userInfo.role = roleObj;
  return builder(userInfo, "");
};

Mock.mock(/\/api\/user\/info/, "get", info);
