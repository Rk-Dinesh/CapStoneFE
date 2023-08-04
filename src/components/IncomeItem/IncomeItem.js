import React from "react";
import { styled } from "styled-components";
import Button from "../Button/button";
import { bank, calender, comment, creditcard, debitcard, dollar, money, piggy, trash, upi } from "../../utils/icon";
import { dateFormat } from "../../utils/dateFormat";

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () => {
        switch(category){
            case 'cash':
            return money;
            case 'debit card' :
            return debitcard;
            case "credit card":
                return creditcard;
            case "bank" :
                return bank
            case "upi" :
                return upi
            case "other":
                return piggy
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'cash':
                return money;
                case 'debit card' :
                return debitcard;
                case "credit card":
                    return creditcard;
                case "bank" :
                    return bank
                case "upi" :
                    return upi
                case "other":
                    return piggy
                default:
                    return ''
        }
    }
    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                    {type === 'expense' ? expenseCatIcon() : categoryIcon()} 
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>{comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bpad={'1rem'}
                             bRad={'50%'}
                            //bg={'var(--color-green)'}
                            // color={'#fff'}
                             icolor={'#fff'}
                             hcolor={'var(--color-green'}
                             onClick={() => deleteItem(id)}
                        />  
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height:80px;
        border-radius:20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-right:2rem;
            position: relative;
            &:: before {
                content:'';
                position: absolute;
                left: 0:
                top: 50%;
                transform: translateY(-50%);
                width:.8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items:center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items:center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;
export default IncomeItem