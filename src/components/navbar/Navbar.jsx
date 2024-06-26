import styles from './navbar.module.scss';

const Navbar = ({ renderIn, setDropdownActive }) => {
	let className = styles.navbar;
	switch (renderIn) {
		case 'header':
			className = styles.navbar_header;
			break;
		case 'footer':
			className = styles.navbar_footer;
			break;
		case 'dropdown':
			className = styles.navbar_dropdown;
			break;
	}

	const handleClick = () => { 
		setDropdownActive(false);
	}
	return (
		<nav className={className}>
			<ul className={styles.navbar_list}>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#numbers"
					>
						цифры
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a onClick={handleClick} className={`${styles.navbar_link} ${styles.navbar_link_common}`} href="#">
						сделки онлайн
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#about"
					>
						о компании
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a onClick={handleClick} className={`${styles.navbar_link} ${styles.navbar_link_common}`} href="#">
						как начать
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#tariffs"
					>
						тарифы
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a onClick={handleClick} className={`${styles.navbar_link} ${styles.navbar_link_common}`} href="#">
						отзывы
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#faq"
					>
						faq
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
