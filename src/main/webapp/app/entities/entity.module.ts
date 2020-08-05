import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.JhipsterSampleAppProductModule),
      },
      {
        path: 'board',
        loadChildren: () => import('./board/board.module').then(m => m.JhipsterSampleAppBoardModule),
      },
      {
        path: 'notice',
        loadChildren: () => import('./notice/notice.module').then(m => m.JhipsterSampleAppNoticeModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterSampleAppEntityModule {}
