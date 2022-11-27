import { expensesOpt, expensesSum, incomeOpt, incomeSum, subtract } from '../../../../../var';
import Info from '../Info/Info';

const balanceSum: number = subtract(incomeSum, expensesSum);

export const InfoBlock = () => {
  return (
    <div className="block info info_block">
      <Info title="Доходы" sum={incomeSum} options={incomeOpt} />
      <Info title="Расходы" sum={expensesSum} options={expensesOpt} />
      <Info title="Остаток" sum={balanceSum} />
    </div>
  );
};
