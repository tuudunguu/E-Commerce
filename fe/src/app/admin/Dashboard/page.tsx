'use client';

import { AdminContainer } from '../_components/assets/AdminContainer';
import { IncomeAndOrder } from '../_components/IncomeAndOrder';

export default function () {
  return (
    <AdminContainer className="bg-white">
      <div>
        <IncomeAndOrder />
      </div>
    </AdminContainer>
  );
}
