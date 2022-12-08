import * as React from 'react';

interface IconProps {
    icon: string
}

const Icon = (props: IconProps) => {

    switch (props.icon) {
        case 'plus':
            return (
                <svg className="icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 5.5V0.5H6.5V5.5H11.5V6.5H6.5V11.5H5.5V6.5H0.5V5.5H5.5Z" fill="currentColor" />
                </svg>
            )
        case 'minus':
            return (
                <svg className="icon" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 1.5H0.5V0.5H11.5V1.5Z" fill="currentColor" />
                </svg>

            )
        case 'link':
            return (
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.52512 13.6568L8.17677 11.0052L8.88388 11.7123L6.23223 14.3639C4.96302 15.6331 2.90524 15.6331 1.63603 14.3639C0.366828 13.0947 0.366828 11.0369 1.63603 9.76772L4.28768 7.11607L4.99479 7.82317L2.34314 10.4748C1.46446 11.3535 1.46446 12.7781 2.34314 13.6568C3.22182 14.5355 4.64644 14.5355 5.52512 13.6568ZM11.7123 8.88383L11.0052 8.17673L13.6568 5.52507C14.5355 4.6464 14.5355 3.22177 13.6568 2.34309C12.7782 1.46441 11.3535 1.46442 10.4749 2.34309L7.82322 4.99474L7.11611 4.28764L9.76776 1.63599C11.037 0.366784 13.0948 0.366784 14.364 1.63599C15.6332 2.90519 15.6332 4.96298 14.364 6.23218L11.7123 8.88383ZM6.26169 10.5043L10.5043 6.26164L9.7383 5.49561L5.49566 9.73825L6.26169 10.5043Z" fill="currentColor"/>
                </svg>

            )
        case 'check':
            return (
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.91107 10.8654L11.9111 6.36553L11.0889 5.63472L7.47645 9.69865L4.8889 7.11121L4.1111 7.88904L7.1111 10.8889L7.52355 11.3014L7.91107 10.8654Z" fill="currentColor" />
                </svg>


            )
    }

    return null
};

export default Icon;
