import Mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/system/user/getInfo',
    method: 'get',
    response: () => {
      return {
        msg: '操作成功',
        code: 200,
        permissions: ['*:*:*'],
        roles: ['admin'],
        user: {
          searchValue: null,
          createBy: 'admin',
          createTime: '2022-02-24 12:17:45',
          updateBy: null,
          updateTime: null,
          remark: '管理员',
          params: {},
          userId: 1,
          deptId: 250,
          userName: 'admin',
          realName: '若依',
          email: 'ry@163.com',
          phonenumber: '15888888888',
          sex: '1',
          jobNumber: '001',
          avatar: '',
          password:
            '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2',
          status: '0',
          delFlag: '0',
          loginIp: '127.0.0.1',
          loginDate: '2022-02-24T12:17:45.000+08:00',
          dept: {
            searchValue: null,
            createBy: null,
            createTime: null,
            updateBy: null,
            updateTime: null,
            remark: null,
            params: {},
            deptId: 250,
            parentId: 209,
            ancestors: null,
            deptName: '海盐嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻',
            orderNum: '1',
            leader: null,
            phone: null,
            email: null,
            code: null,
            fax: null,
            description: null,
            status: '0',
            delFlag: null,
            parentName: null,
            children: []
          },
          deptName: '海盐嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻',
          roleName: '超级管理员',
          postName: '董事长',
          roles: [
            {
              searchValue: null,
              createBy: null,
              createTime: null,
              updateBy: null,
              updateTime: null,
              remark: null,
              params: {},
              roleId: 1,
              roleName: '超级管理员',
              roleKey: 'admin',
              roleSort: '2',
              dataScope: '1',
              menuCheckStrictly: false,
              deptCheckStrictly: false,
              status: '0',
              delFlag: null,
              flag: false,
              menuIds: null,
              deptIds: null,
              admin: true
            },
            {
              searchValue: null,
              createBy: null,
              createTime: null,
              updateBy: null,
              updateTime: null,
              remark: null,
              params: {},
              roleId: 144,
              roleName: '333',
              roleKey: '333',
              roleSort: '6',
              dataScope: '1',
              menuCheckStrictly: false,
              deptCheckStrictly: false,
              status: '0',
              delFlag: null,
              flag: false,
              menuIds: null,
              deptIds: null,
              admin: false
            }
          ],
          posts: [
            {
              searchValue: null,
              createBy: null,
              createTime: null,
              updateBy: null,
              updateTime: null,
              remark: null,
              params: {},
              postId: 1,
              postCode: 'ceo',
              postName: '董事长',
              postSort: null,
              status: null,
              flag: false
            }
          ],
          roleIds: null,
          postIds: null,
          roleId: null,
          sort: 6,
          allowLogin: null,
          isLogined: '1',
          admin: true
        }
      }
    }
  }
] as MockMethod[]
