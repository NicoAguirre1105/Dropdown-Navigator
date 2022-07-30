function main() {

    function featuresMenu() {
        if (featuresVar == false) {
            dropdownMenus[0].style.display = 'block'
            features.getElementsByTagName('img')[0].classList = 'hidden'
            features.getElementsByTagName('img')[1].classList = ''
            featuresVar = true
            return
        }
        dropdownMenus[0].style.display = 'none'
        features.getElementsByTagName('img')[0].classList = ''
        features.getElementsByTagName('img')[1].classList = 'hidden'
        featuresVar = false
    }

    function companyMenu() {
        if (companyVar == false) {
            dropdownMenus[1].style.display = 'block'
            company.getElementsByTagName('img')[0].classList = 'hidden'
            company.getElementsByTagName('img')[1].classList = ''
            companyVar = true
            return
        }
        dropdownMenus[1].style.display = 'none'
        company.getElementsByTagName('img')[0].classList = ''
        company.getElementsByTagName('img')[1].classList = 'hidden'
        companyVar = false
    }

    function createEvents() {
        menuIcon.addEventListener('click', function () {
            menuWindow.style.visibility = 'visible'
        })
        xMark.addEventListener('click', function () {
            menuWindow.style.visibility = 'hidden'
            if (featuresVar == true) {
                featuresMenu()
            }
            if (companyVar == true) {
                companyMenu()
            }
        })
        features.addEventListener('click', featuresMenu)
        company.addEventListener('click', companyMenu)
    }

    const menuIcon = document.getElementById('menu-icon'),
        xMark = document.getElementById('x-mark'),
        features = document.getElementById('features'),
        company = document.getElementById('company'),
        dropdownMenus = document.getElementsByTagName('ul'),
        menuWindow = document.getElementsByTagName('nav')[0]
    
    let featuresVar = false,
        companyVar = false

    createEvents()
}

main()