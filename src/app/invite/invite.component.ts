import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  public inviteContent: any;
  public dates = ['Watch Now Instantly', 'Watch Later Today', 'Sun, June 30, 2019', 'Mon, July 1, 2019', 'Tue, July 2, 2019'];
  public times = ['7am', '10pm', '12am', '3pm' ];

  constructor(private buildForm: FormBuilder) {
  }
  ReserveForm = this.buildForm.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
  });

  ngOnInit() {
    this.inviteContent = {
      firstShortdescription: `Join 100,000+ people becoming rejection-proof in this Masterclass…`,
      title: 'Experience Rapid Transformational Therapy to Awaken Your Most Confident Self',
      shortdescription: `Experience a full transformational hypnotherapy session designed to rapidly
         bulletproof you against rejection and boost your confidence.`,
      aboutEvents: [
        {
          description: `<b>Experience a LIVE 20-minute Rapid Transformational Therapy session with Marisa</b> – designed to awaken
            your
            brain’s
            ability to recognize negative beliefs and repattern your mind for a greater career, better relationships,
            increased self-esteem and more (this is the same technique Marisa uses with her private clients to trigger
            instant
            and deep neurological transformation).`
        },
        {
          description: `<b>You will feel results immediately when you wake up the next day.</b> This is a “Model of the World” Shift.
            Meaning
            the type of transformation that leads you to ‘waking up’ and viewing the world in a different way. Marisa is
            known for healing patients with ONE session rather than making them come back over and over again. Note: We
            CANNOT guarantee how long the feelings will last. But for many people it leaves a powerful new mark on their
            lives as they see the world in a unique new way.`
        },
        {
          description: `<b>Discover this key mindset difference between 99% of the population and the 1% that Marisa works with</b> —
            Olympians, Hollywood Stars, Royal Families and A-List actors and actresses. Marisa has identified 8 unique
            Mental Thought Models that this 1% has that you can easily apply to your daily life for a massive awakening
            experience. The answer will surprise you…`
        },
        {
          description: `Expand your Vision for yourself (stop settling) as Marisa explains how to lead an uncompromised life —<b> a
           life
           where you enjoy success, abundance and freedom without having to wait for years… </b> and why your total
         breakthrough
         in all areas of life is just eight transformations away.`
        },
        {
          description: `<b>Understand the REAL key to breakthrough in any — ANY — area of your life… </b> this makes changing your
            results
            and
            transforming your life as easy as changing outfits. Clue: It has to do with removing voids that we take within
            ourselves as children (mostly due to suppression of love)`
        },
        {
          description: `And so much more…`
        }

      ],

      aboutPresenter: [
        {
          description: `Marisa Peer, named the Best British therapist by Tatler and Men’s Health magazines, has spent nearly 30
              years working with an extensive client list including royalty, rock stars, Hollywood actors, Olympic
              athletes, <span class="caps">CEO</span>s, and political leaders.`
        },
        {
          description: ` As a hands-on therapist to her clients, Marisa uses Rapid Transformational Therapy (trademarked) to
              unlock the brain’s neuroplasticity and help her clients literally rewrite their brains for performance,
              overcoming challenges, and capacity for improved self-esteem, greater joy, and complete freedom. In her
              work with champion athletes, stars, and the world’s top business leaders, she has noticed a recurring
              theme of maximizing their success – the benefit of activating the mind’s neuroplasticity— to virtually
              remove all limits and open the door to the lives they want in health, wealth, love, and more. `
        },
        {
          description: ` Marisa also lectures, writes columns and appears on television and radio all over the world. She’s
              written four bestselling books, highlighting the wonders of transformational hypnotherapy in varying
              fields such as losing weight, getting pregnant, gaining confidence and staying young.`
        },
        {
          description: ` In this Masterclass, Marisa will demonstrate the instant transformation that’s possible with her
              unique, highly personal approach to hypnotherapy.</p> `
        }
      ],

      navigationItems: [
        { name: 'LogIn' },
        { name: 'Support' }
      ],
      marisaFriends: [
        {
          imgUrl: `https://static.mindvalley.com/public/assets/2019/03/aXPg_ul-benefit-03_s337.jpg`,
          description: `Marisa and her husband, seen here with Vishen, have been helping others break limiting
              beliefs for nearly 30 years.`,
          altern: `Marisa and her husband, seen here with Vishen`
        },
        {
          imgUrl: `https://static.mindvalley.com/public/assets/2019/03/Fqio_ul-benefit-01_s337.jpg`,
          description: `Marisa guiding an entire audience of 800 people through incredible breakthroughs.`,
          altern: `Marisa guiding an entire audience`
        },
        {
          imgUrl: `https://static.mindvalley.com/public/assets/2019/03/iqUZ_ul-benefit-02_s337.jpg`,
          description: `Marisa recently won several Stevie Awards including Woman of the Year, Entrepreneur of
          the Year, and the Lifetime Achievement Award`,
          altern: `Marisa recently won several Stevie Awards`
        },

      ],
      logos1: [
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-6-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-9-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-2-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-5-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-1-white.png`
        }
      ],
      logos2: [
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-4-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-3-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-8-white.png`
        },
        {
          imgUrl: `https://www.mindvalley.com/uncompromised-life/assets/images/lp/aso-logo-7-white.png`
        },
      ],
      futa: [
        {
          link: `https://www.facebook.com/mindvalley/`,
          imgUrl: `https://static.mindvalley.com/public/assets/2018/06/sVKt_ico-facebook.svg`
        },
        {
          link: `https://www.twitter.com/mindvalley/`,
          imgUrl: `https://static.mindvalley.com/public/assets/2018/06/FSIo_ico-twitter.svg`
        },
        {
          link: `https://www.instagram.com/mindvalley/`,
          imgUrl: `https://static.mindvalley.com/public/assets/2018/06/J4EN_ico-instagram.svg`
        },
        {
          link: `https://www.youtube.com/mindvalley/`,
          imgUrl: `https://static.mindvalley.com/public/assets/2018/06/LaCU_ico-youtube.svg`
        },
        {
          link: `https://open.spotify.com/show/33x8LqNwzBthoVa3im6NdO?si=cVrg5sV0RlqEguDtigNPIA`,
          imgUrl: `https://s28.mindvalley.us/mv2018/media/images/ico-spotify.svg`
        },
        {
          link: `https://itunes.apple.com/us/podcast/the-mindvalley-podcast-with-vishen-lakhiani/id1317823455?mt=2`,
          imgUrl: `https://s74.mindvalley.us/mv2018/media/images/ico-podcast.svg`
        },
        {
          link: `https://soundcloud.com/user-692283923-293518318`,
          imgUrl: `https://static.mindvalley.com/public/assets/2018/08/ITTX_ico-soundcloud.svg`
        }
      ],

      durations: [
        {
          imgUrl: `https://static.mindvalley.com/assets/svg/ico-calendar.svg`,
          title: ` Your Calendar`,
          description: `Clear up your schedule and treat yourself to some me-time.`,
          altern: `Clear up your schedule and treat yourself to some me-time.`
        },
        {
          imgUrl: `https://static.mindvalley.com/assets/svg/ico-clock.svg`,
          title: `1.5 hours`,
          description: `Schedule approximately 80 minutes for this class`,
          altern: `Schedule approximately 80 minutes for this class`
        },
        {
          imgUrl: `https://static.mindvalley.com/public/assets/2019/03/ico-live-play.svg`,
          title: `Live
          hypnotherapy session`,
          description: `Ensure you are in a safe, quiet, distraction-free zone.`,
          altern: `Print out your workbook for maximum learning.`
        },

      ],
    };
  }
}

