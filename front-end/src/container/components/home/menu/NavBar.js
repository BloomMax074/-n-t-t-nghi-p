import { Avatar, Dropdown, Menu } from 'antd';
import React, { createRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { checkBar, funLine, lineSlide, openMenu } from '../../../javascript/Functions';
import logo from '../../../images/techjobs.png';
import '../../../styles/home/NavBar.scss';

function NavBar(props) {
    const navbar_features = (bar_ref, nav_ref, line_ref) => {
        setTimeout(() => {
            lineSlide();
            openMenu(bar_ref.current);
            funLine();
            checkBar(bar_ref.current, nav_ref.current, line_ref.current);
            window.addEventListener("resize", (e) => {
                funLine();
                checkBar(bar_ref.current, nav_ref.current, line_ref.current);
            });
        }, 500);
    };
    
    let { pathname } =useLocation();
    const bar_element = createRef();
    const nav_element = createRef();
    const line_element = createRef();
    const [user, setUser] = useState();
    navbar_features(bar_element, nav_element, line_element);

    useEffect(() => {
        let idClass = pathname.slice(1);
        if (nav_element.current) {
            let ListMenu = nav_element.current.querySelectorAll('.item');
            nav_element.current.querySelector('.item.active').classList.remove('active');
            for (let i = 0; i < ListMenu.length; i++) {
                if (ListMenu[i].id == idClass) {
                    ListMenu[i].classList.add('active');
                }
            }
        }
    }, []);

    const inforCompany = (
        <Menu.Item key="1">
            <Link to="">Thông tin công ty</Link>
        </Menu.Item>
    );

    const inforUser = (
        <Menu.Item key="2">
             <Link to="">Thông tin cá nhân</Link>
        </Menu.Item>
    );

    const onLogout = () => {
        localStorage.removeItem("token");
        setUser("");
    };

    const Logout = (
        <Menu.Item key="3">
            <Link to="/" onClick={onLogout}>
                Đăng xuất
            </Link>
        </Menu.Item>
    );

    const setType = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/login">
                    Đăng nhập
                </Link>
            </Menu.Item>
            {user ? (user.type === "company" ? inforCompany : inforUser) : ""}
            {user ? Logout : ""}
        </Menu>
    );

    const imgDefault = "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg";

    return (
        <div className={props.class}>
            <div className="menu__left">
                <Link to="/">
                    <img src={logo} height={50} alt="Website Logo" />
                </Link>
            </div>
            <div className="menu__right">
                <div className="bar menu__bar" ref={bar_element}>
                    <div className="line--top"></div>
                    <div className="line--mid"></div>
                    <div className="line--bot"></div>
                </div>
                <nav ref={nav_element}>
                    <div className="item active" id="">
                        <Link to="/">
                            Trang chủ
                        </Link>
                    </div>
                    <div className="item" id="candidates">
                        <Link to="/candidates">
                            Ứng viên
                        </Link>
                    </div>
                    <div className="item" id="jobs">
                        <Link to="/jobs">
                            Việc làm
                        </Link>
                    </div>
                    <div className="item" id="companies">
                        <Link to="/companies">
                            Nhà tuyển dụng
                        </Link>
                    </div>
                    <div className="line_slide" ref={line_element}></div>
                    {user ? (
                        user.role === "user" ? (
                        <div className="item">
                            <Link to="/createCv">Tạo CV</Link>
                        </div>
                        ) : (
                        ""
                        )
                    ) : (
                        ""
                    )}          
                    <div className="line_slide" ref={line_element}></div>
                    {user ? (
                        user.role === "admin" || user.role === "grant" ? (
                        <div className="item">
                            <Link to="/admin">Admin</Link>
                        </div>
                        ) : (
                        ""
                        )
                    ) : (
                        ""
                    )}
                    <Dropdown overlay={setType} trigger={["click"]}>
                        <spna className="nav-link">
                            <Avatar size="default" src={user ? user.avatar : imgDefault} />
                        </spna>
                    </Dropdown>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
