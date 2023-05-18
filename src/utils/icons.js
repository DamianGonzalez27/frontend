import {
    FaHome,
    FaSearch,
    FaUserCircle,
    FaIdCard,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaIdCardAlt,
    FaCreditCard,
    FaUserAlt,
    FaUser,
    FaStoreAlt,
    FaMoneyBillAlt,
    FaBookmark,
    FaBell,
    FaEdit,
    FaLock,
    FaUnlock,
    FaEye,
    FaPencilAlt,
    FaCalendarAlt,
    FaPhone,
    FaMapMarkedAlt,
    FaPlus
  } from 'react-icons/fa'
  import { AiOutlineLogout, AiFillWechat } from 'react-icons/ai'
  import { FiImage } from 'react-icons/fi'
  import { BiLogIn } from 'react-icons/bi'
  import { RiEditCircleFill, RiEyeCloseLine } from 'react-icons/ri'
  import { MdOutlineAlternateEmail } from 'react-icons/md'
  import React from 'react'
  
  const ICONS = {
    home: {
      variant: {
        primary: <FaHome />
      }
    },
    store: {
      variant: {
        alt: <FaStoreAlt />
      }
    },
    money: {
      variant: {
        alt: <FaMoneyBillAlt />
      }
    },
    bell: {
      variant: {
        primary: <FaBell />
      }
    },
    chat: {
      variant: {
        primary: <AiFillWechat />
      }
    },
    search: {
      variant: {
        primary: <FaSearch />
      }
    },
    auth: {
      variant: {
        login: <BiLogIn />,
        logout: <AiOutlineLogout />
      }
    },
    bookmark: {
      variant: {
        primary: <FaBookmark />
      }
    },
    edit: {
      variant: {
        primary: <FaEdit />,
        circle: <RiEditCircleFill />
      }
    },
    user: {
      variant: {
        circle: <FaUserCircle />,
        alt: <FaUserAlt />,
        primary: <FaUser />
      }
    },
    idCard: {
      variant: {
        primary: <FaIdCard />,
        alt: <FaIdCardAlt />
      }
    },
    mapMarket: {
      variant: {
        primary: <FaMapMarkerAlt />,
        map: <FaMapMarkedAlt />
      }
    },
    image: {
      variant: {
        primary: <FiImage />
      }
    },
    socials: {
      variant: {
        facebook: <FaFacebook />,
        twitter: <FaTwitter />,
        google: <FaGoogle />,
        instagram: <FaInstagram />,
        linkedin: <FaLinkedin />
      }
    },
    creditCard: {
      variant: {
        primary: <FaCreditCard />
      }
    },
    lock: {
      variant: {
        primary: <FaLock />,
        unlock: <FaUnlock />
      }
    },
    eye: {
      variant: {
        primary: <FaEye />,
        open: <RiEyeCloseLine />
      }
    },
    mail: {
      variant: {
        primary: <MdOutlineAlternateEmail />
      }
    },
    pencil: {
      variant: {
        primary: <FaPencilAlt />
      }
    },
    calendar: {
      variant: {
        primary: <FaCalendarAlt />
      }
    },
    phone: {
      variant: {
        primary: <FaPhone />
      }
    },
    plus: {
      variant: {
        primary: <FaPlus />
      }
    }
  }
  
  export const getIcon = (name, variantName = 'primary') => {
    return ICONS[name].variant[variantName]
  }
  