import React from 'react'
import { Menu } from "antd";
import { withRouter, Link } from "react-router-dom";
import {
  UnorderedListOutlined, SettingOutlined, BankOutlined, PlusOutlined, ReconciliationOutlined, AppstoreAddOutlined,
  ImportOutlined, TeamOutlined, UserOutlined, HddOutlined, DatabaseOutlined, PicCenterOutlined, CalculatorOutlined,
  MailOutlined, ScheduleOutlined, LineChartOutlined, HourglassOutlined, UsergroupAddOutlined, SendOutlined
} from '@ant-design/icons';
import { useSelector } from "react-redux";
import { MenuGroup } from '../../common/constant'
import { getPermissionByName } from "../../utils";

const SubMenu = Menu.SubMenu;
function MainLeftMenu({ selectedKeys, onClickMenu }) {
  const user = useSelector(state => state.authReducer.userInfo);
  let screenPermistions = [];
  let hasRoleAdmin = false;
  let hasRoleAdminElectricCar = false;
  let hasRoleReceptionist = false;
  let hasRolePostman = false;
  let hasPcm = false;
  let hasUniformAdmin= false;

  if (user != null) {
    screenPermistions = user.screenPermistions;
    hasRoleAdmin = getPermissionByName(screenPermistions, MenuGroup.AdminMenu);
    hasRoleAdminElectricCar = getPermissionByName(screenPermistions, MenuGroup.AdminElectricCar);
    hasRoleReceptionist = getPermissionByName(screenPermistions, MenuGroup.Receptionist);
    hasRolePostman = getPermissionByName(screenPermistions, MenuGroup.Postman);
    hasPcm = getPermissionByName(screenPermistions, MenuGroup.Pcm);
    hasUniformAdmin = getPermissionByName(screenPermistions, MenuGroup.UniformAdmin);

  }
  return (
    <>{
      user != null ? (
        <Menu
          selectedKeys={[selectedKeys]}
          onClick={onClickMenu}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="/MyWaittingRequest">
            <Link to="/MyWaittingRequest">
              <HourglassOutlined />
              <span className="nav-text">My Waitting Request</span>
            </Link>
          </Menu.Item>

          {hasRoleAdminElectricCar ? (
            <Menu.Item key="/RequestVehicle">
              <Link to="/RequestVehicle">
                <UnorderedListOutlined />
                <span className="nav-text">Request Vehicle List</span>
              </Link>
            </Menu.Item>
          ) : null}

          {hasPcm || getPermissionByName(screenPermistions, MenuGroup.AdministratorMenu)? (
           <SubMenu
           key="pcm"
           title={
             <span>
               <SendOutlined  />
               <span className="nav-text">Post tracking</span>
             </span>
           }>
            {
              hasPcm || getPermissionByName(screenPermistions, MenuGroup.AdministratorMenu)?
              <Menu.Item key="/pcm">
              <Link to="/pcm">
                <CalculatorOutlined />
                <span className="nav-text">List request</span>
              </Link>
            </Menu.Item> : null
            }
           
           {hasRoleReceptionist || getPermissionByName(screenPermistions, MenuGroup.AdministratorMenu) ? <Menu.Item key="/list/history">
             <Link to="/list/history">
               <UserOutlined />
               <span className="nav-text">History</span>
             </Link>
           </Menu.Item> : null}
           
         </SubMenu>
            
          ) : null}

          {hasRoleAdmin ? (
            <>
              <Menu.Item key="/Batch">
                <Link to="/Batch">
                  <AppstoreAddOutlined />
                  <span className="nav-text">Create Batch</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/BatchList">
                <Link to="/BatchList">
                  <ScheduleOutlined />
                  <span className="nav-text">Batch List</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/Request">
                <Link to="/Request">
                  <PlusOutlined />
                  <span className="nav-text">Create Request</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/ListRequest">
                <Link to="/ListRequest">
                  <UnorderedListOutlined />
                  <span className="nav-text">Request List</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/RequestUser">
                <Link to="/RequestUser">
                  <UsergroupAddOutlined />
                  <span className="nav-text">Request User</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/ImportCollectData">
                <Link to="/ImportCollectData">
                  <ImportOutlined />
                  <span className="nav-text">Import/Collect Data</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/ReportCheckin">
                <Link to="/ReportCheckin">
                  <LineChartOutlined />
                  <span className="nav-text">Report Check-in</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/SendMailRemind">
                <Link to="/SendMailRemind">
                  <MailOutlined />
                  <span className="nav-text">Send Mail Remind</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="/Assets">
                <Link to="/Assets">
                  <ReconciliationOutlined />
                  <span className="nav-text">Assets</span>
                </Link>
              </Menu.Item>

              {/* <Menu.Item key="/RequestVehicle">
                <Link to="/RequestVehicle">
                  <UnorderedListOutlined />
                  <span className="nav-text">Request Vehicle List</span>
                </Link>
              </Menu.Item> */}
            </>
          ) : null}

          {hasUniformAdmin ? (
            <Menu.Item key="/UniformReport">
              <Link to="/UniformReport">
                <UnorderedListOutlined />
                <span className="nav-text">Uniform report</span>
              </Link>
            </Menu.Item>
          ) : null}

          {getPermissionByName(screenPermistions, MenuGroup.AdministratorMenu) ? (
            <SubMenu
              key="admin"
              title={
                <span>
                  <SettingOutlined />
                  <span>Administrator</span>
                </span>
              }>
              <Menu.Item key="/Admin/Category">
                <Link to="/Admin/Category">
                  <CalculatorOutlined />
                  <span className="nav-text">Category</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/RejectReason">
                <Link to="/Admin/RejectReason">
                  <UserOutlined />
                  <span className="nav-text">Reject Reason</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/CollectMethod">
                <Link to="/Admin/CollectMethod">
                  <PicCenterOutlined />
                  <span className="nav-text">Collect Method</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/DataType">
                <Link to="/Admin/DataType">
                  <DatabaseOutlined />
                  <span className="nav-text">Data Type</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/LocationBuilding">
                <Link to="/Admin/LocationBuilding">
                  <BankOutlined />
                  <span className="nav-text">Location Building</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/Roles">
                <Link to="/Admin/Roles">
                  <TeamOutlined />
                  <span className="nav-text">Roles</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/FieldInfo">
                <Link to="/Admin/FieldInfo">
                  <HddOutlined />
                  <span className="nav-text">Field Info</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/UserRole">
                <Link to="/Admin/UserRole">
                  <UserOutlined />
                  <span className="nav-text">User Role</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/PcmBuilding">
                <Link to="/Admin/PcmBuilding">
                  <UserOutlined />
                  <span className="nav-text">Pcm Building</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/Admin/PcmUserRole">
                <Link to="/Admin/PcmUserRole">
                  <UserOutlined />
                  <span className="nav-text">Pcm User Role</span>
                </Link>
              </Menu.Item>
              

            </SubMenu>

          ) : null}

        </Menu>
      ) : null

    }</>

  )
}

export default withRouter(MainLeftMenu);

