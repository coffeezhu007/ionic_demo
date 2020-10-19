import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DangerPagePage } from './danger-page.page';

describe('DangerPagePage', () => {
  let component: DangerPagePage;
  let fixture: ComponentFixture<DangerPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DangerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
