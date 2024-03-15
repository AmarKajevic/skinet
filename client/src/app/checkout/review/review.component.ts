import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  @Input() appStepper?: CdkStepper;
  constructor(private basketService : BasketService, private toastr: ToastrService) { }

  createPaymentIntent(){
    this.basketService.createPaymentIntent().subscribe({
      next:  () => {
        this.appStepper?.next();
      },
      error: error => this.toastr.error(error.message)
    })
  }

}
